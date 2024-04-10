// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract SecTool{

    // System admin address
    address public admin;

    // Constructor to set admin address
    constructor() {
        admin = msg.sender;
    }

    struct Pro{
        string fname;
        string lname;
        string organization;
        string location;
    }

    struct Document {
        string title;
        string description;
        string ipfs_hash;
        uint256 timestamp;
        address uploader;
    }

    Document[] public documentsArray;
    Pro [] public prosArray;

    function add_Pro (
        string memory _fname,
        string memory _lname,
        string memory _organization,
        string memory _location
    ) public {
        Pro memory newpro = Pro({
            fname: _fname,
            lname: _lname,
            organization: _organization,
            location: _location
        });
        prosArray.push(newpro);
    }

   function storeDocument(
        string memory _title,
        string memory _description,
        string memory _ipfs_hash
    ) public {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");
        require(bytes(_ipfs_hash).length > 0, "IPFS hash cannot be empty");

        Document memory newDocument = Document({
            title: _title,
            description: _description,
            ipfs_hash: _ipfs_hash,
            timestamp: block.timestamp,
            uploader: msg.sender
        });

        documentsArray.push(newDocument);
    }


    // Function to view all PROs
    function viewPROs() public view returns (Pro[] memory) {
        return prosArray;
    }

    // Function to view documents posted by a specific PRO
    function viewDocumentsByPRO(address _proAddress) public view returns (Document[] memory) {
        uint256 count = 0;
        for (uint256 i = 0; i < documentsArray.length; i++) {
            if (documentsArray[i].uploader == _proAddress) {
                count++;
            }
        }
        Document[] memory proDocuments = new Document[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < documentsArray.length; i++) {
            if (documentsArray[i].uploader == _proAddress) {
                proDocuments[index] = documentsArray[i];
                index++;
            }
        }
        return proDocuments;
    }

}