import { useState } from "react";
import AWS from "aws-sdk";

const ACCESS_ID_KEY = process.env.REACT_APP_ACCESS_ID_KEY;
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;
const endpoint = "http://localhost:9000";

const s3 = new AWS.S3({
  accessKeyId: ACCESS_ID_KEY,
  secretAccessKey: SECRET_KEY,
  endpoint: endpoint,
  s3ForcePathStyle: true,
  signatureVersion: "v4",
});

const FileUploader = () => {
  const [file, setFile] = useState(new File([], ""));
  const selectImage = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const upload = () => {
    const params = {
      Bucket: "test",
      Key: file.name,
      Body: file,
      ACL: "public-read",
    };
    s3.putObject(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully uploaded data to minio");
      }
    });
  };

  return (
    <>
      <h1>FileUploader</h1>
      <form>
        <input type="file" name="file" onChange={selectImage} />
        <input type="button" value="Upload" onClick={upload} />
      </form>
    </>
  );
};

export default FileUploader;
