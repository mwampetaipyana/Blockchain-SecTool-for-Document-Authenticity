import axios from 'axios';

export const addFile = async (FileName, FileObject) => {
    const formData = new FormData();

    formData.append('file', FileObject);
    formData.append("pinataMetadata", `{
      "name": "${FileName}"
    }`);
    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    });
    formData.append('pinataOptions', pinataOptions);

    try {
        const pinataUrl = process.env.REACT_APP_PINATA_URL;
        const privateKey = process.env.REACT_APP_PINATA_KEY;
        console.log(pinataUrl);
        const res = await axios.post(`${pinataUrl}/pinning/pinFileToIPFS/`, formData, {
            maxBodyLength: "Infinity",
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                'Authorization': `Bearer ${privateKey}`
            }
        });
        return res.data.IpfsHash;
    } catch (error) {
        console.log(error);
    }
};
