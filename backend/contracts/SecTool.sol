// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract SecTool {
    // System admin address
    address public admin;

    // Constructor to set admin address
    constructor() {
        admin = msg.sender;
    }

    struct Pro {
        string fname;
        string lname;
        address proAddress;
        string organization;
        string location;
    }

    struct Document {
        string docID;
        string title;
        string description;
        string ipfs_hash;
        uint256 timestamp;
        address uploader;
    }

    struct Transaction {
        string transactionType;
        address userAddress;
        uint256 timestamp;
        string status;
    }

    // Arrays to store documents
    Document[] public documentsArray;

    // Array to store PROs
    Pro[] public prosArray;

    // Array to store transactions
    Transaction[] public transactionsArray;

    // Mappings
    mapping(address => Document[]) mydocumentsMapping;
    mapping(string => Document[]) id_docMapping;

    // Event to log new transactions
    event NewTransaction(
        string transactionType,
        address userAddress,
        uint256 timestamp,
        string status
    );

    // Function to add a new transaction
    function addTransaction(
        string memory _transactionType,
        address _userAddress,
        string memory _status
    ) internal {
        Transaction memory newTransaction = Transaction({
            transactionType: _transactionType,
            userAddress: _userAddress,
            timestamp: block.timestamp,
            status: _status
        });
        transactionsArray.push(newTransaction);
        emit NewTransaction(_transactionType, _userAddress, block.timestamp, _status);
    }

    // Function to add a new Pro
    function add_Pro(
        string memory _fname,
        string memory _lname,
        address _proAddress,
        string memory _organization,
        string memory _location
    ) public adminOnly{
        Pro memory newpro = Pro({
            fname: _fname,
            lname: _lname,
            proAddress: _proAddress,
            organization: _organization,
            location: _location
        });
        prosArray.push(newpro);
        addTransaction("Add Pro", msg.sender, "Success");
    }

    // Function to store a new document
    function storeDocument(
        string memory _docID,
        string memory _title,
        string memory _description,
        string memory _ipfs_hash
    ) public isPRO{
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");
        require(bytes(_ipfs_hash).length > 0, "IPFS hash cannot be empty");
     
        Document memory newDocument = Document({
            docID: _docID,
            title: _title,
            description: _description,
            ipfs_hash: _ipfs_hash,
            timestamp: block.timestamp,
            uploader: msg.sender
        });

        documentsArray.push(newDocument);
        id_docMapping[_docID].push(newDocument);
        mydocumentsMapping[msg.sender].push(newDocument);
        addTransaction("Store Document", msg.sender, "Success");
    }

    // Function to verify a document by a Pro
    function verifyDocumentByPro(string memory _ipfs_hash)
        public
        view
        returns (bool)
    {
        bool _confirmation;
        for (uint256 i = 0; i < documentsArray.length; i++) {
            if (
                keccak256(bytes(documentsArray[i].ipfs_hash)) ==
                keccak256(bytes(_ipfs_hash))
            ) {
                _confirmation = true; // Document found
            } else {
                _confirmation = false; // Document not found
            }
        }
        return _confirmation;
    }

    // Function to edit a document's title, description, or IPFS hash by a Pro
  function editDocument(
    string memory _docID,
    string memory _newTitle,
    string memory _newDescription,
    string memory _newIpfsHash
    ) public isPRO {
    // Check if the document exists in the id_docMapping
    require(
        id_docMapping[_docID].length > 0,
        "Document not found"
    );

    // Find the index of the document in the documentsArray
    for (uint256 i = 0; i < documentsArray.length; i++) {
        if (keccak256(abi.encodePacked(documentsArray[i].docID)) 
        == keccak256(abi.encodePacked(_docID))) {
            // Replace the document in the documentsArray with the last document
            documentsArray[i] = documentsArray[documentsArray.length - 1];
            // Remove the last document from the array
            documentsArray.pop();
            break;
        }
    }

    // Remove the document from the uploader's array in mydocumentsMapping
    uint256 uploaderIndex = 0;
    for (; uploaderIndex < mydocumentsMapping[msg.sender].length; uploaderIndex++) {
        if (keccak256(abi.encodePacked(mydocumentsMapping[msg.sender][uploaderIndex].docID)) 
        == keccak256(abi.encodePacked(_docID))) {
            break;
        }
    }
    if (uploaderIndex < mydocumentsMapping[msg.sender].length) {
        // Shift elements to fill the gap left by the removed document
        for (uint256 j = uploaderIndex; j < mydocumentsMapping[msg.sender].length - 1; j++) {
            mydocumentsMapping[msg.sender][j] = mydocumentsMapping[msg.sender][j + 1];
        }
        // Remove the last element (which is now the document we want to delete)
        mydocumentsMapping[msg.sender].pop();
    }

     Document memory updatedDocument = Document({
        docID: _docID,
        title: _newTitle,
        description: _newDescription,
        ipfs_hash: _newIpfsHash,
        timestamp: block.timestamp,
        uploader: msg.sender
    });

    documentsArray.push(updatedDocument);

     // Update the id_docMapping with the new document
    id_docMapping[_docID][0] = updatedDocument;
    mydocumentsMapping[msg.sender].push(updatedDocument);
    addTransaction("Edit Document", msg.sender, "Success");
    }


    function deleteDoc(
        string memory _docID) 
        public isPRO{
    
    // Check if the document exists in the id_docMapping
    require(
        id_docMapping[_docID].length > 0,
        "Document not found"
    );

    // Find the index of the document in the documentsArray
    for (uint256 i = 0; i < documentsArray.length; i++) {
        if (keccak256(abi.encodePacked(documentsArray[i].docID)) 
        == keccak256(abi.encodePacked(_docID))) {
            // Replace the document in the documentsArray with the last document
            documentsArray[i] = documentsArray[documentsArray.length - 1];
            // Remove the last document from the array
            documentsArray.pop();
            break;
        }
    }

    // Remove the document from the uploader's array in mydocumentsMapping
    uint256 uploaderIndex = 0;
    for (; 
    uploaderIndex < mydocumentsMapping[msg.sender].length; 
    uploaderIndex++) {
        if (keccak256(abi.encodePacked(mydocumentsMapping[msg.sender][uploaderIndex].docID))
         == keccak256(abi.encodePacked(_docID))) {
            break;
        }
    }
    if (uploaderIndex < mydocumentsMapping[msg.sender].length) {
        // Shift elements to fill the gap left by the removed document
        for (uint256 j = uploaderIndex; 
        j < mydocumentsMapping[msg.sender].length - 1;
         j++) {
            mydocumentsMapping[msg.sender][j] = mydocumentsMapping[msg.sender][j + 1];
        }
        // Remove the last element (which is now the document we want to delete)
        mydocumentsMapping[msg.sender].pop();
    }
    }

    // Function to view all PROs
    function viewPROs() public view returns (Pro[] memory) {
        return prosArray;
    }

    // Function to view documents posted by a specific PRO
    function viewDocumentsByPRO(address _proAddress)
        public
        view
        returns (Document[] memory)
    {
        return mydocumentsMapping[_proAddress];
    }

    function getAllDocs() public view returns (Document[] memory){
        return documentsArray;
    }
    // Function to get transactions for a specific Pro
    function getTransactionsForPro(address _proAddress)
        public
        view
        returns (Transaction[] memory)
    {
        uint256 numTransactions = transactionsArray.length;
        Transaction[] memory proTransactions = new Transaction[](numTransactions);
        uint256 proTransactionCount = 0;

        // Iterate through all transactions and filter by Pro's address
        for (uint256 i = 0; i < numTransactions; i++) {
            if (transactionsArray[i].userAddress == _proAddress) {
                proTransactions[proTransactionCount] = transactionsArray[i];
                proTransactionCount++;
            }
        }

        // Resize the array to remove any empty slots
        assembly {
            mstore(proTransactions, proTransactionCount)
        }

        return proTransactions;
    }

    modifier adminOnly() {
        require(msg.sender == admin, "SecTool Admin account is required");
        _;
    }

     modifier isPRO() {
        bool isuser = false;
        for (uint256 i = 0; i < prosArray.length; i += 1) {
            if (msg.sender == prosArray[i].proAddress) {
                isuser = true;
            }
        }
        require(isuser, "only identity owner is allowed to perform this Action");
        _;
    }
}
