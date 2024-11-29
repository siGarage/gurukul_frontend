import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone-uploader";

export function DropImg({ imgtype, formik }) {
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  const handleChangeStatus = ({ meta }, status, allFiles) => {
    if (imgtype == "logo") {
      formik.setFieldValue("logo", allFiles[0].file);
    }
    if (imgtype == "photo") {
      formik.setFieldValue("photo", allFiles[0].file);
    }
    if (imgtype == "cv") {
      formik.setFieldValue("cv", allFiles[0].file);
    }
    if(imgtype == "image"){
      formik.setFieldValue("image",allFiles[0].file)
     }
  };

  const handleSubmit = (files, allFiles) => {
    console.log(
      files.map((f) => f.meta),
      "img drop"
    );
    allFiles.forEach((f) => f.remove());
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      //  onSubmit={handleSubmit}
      maxFiles={
        imgtype == "image" ||
        imgtype == "cv" 
          ? 1
          : 20
      }
    />
  );
}
