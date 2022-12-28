import React, { useState } from "react";
import CoustomInput from "../components/Common/CoustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [dec, setDec] = useState();

  console.log(dec);
  return (
    <div>
      <h2 className="text-[24px] font-semibold mb-5">Add Product</h2>
      <div>
        <form action="">
          <CoustomInput
            type={"text"}
            ple={"Enter Blog Title..."}
            value={title}
            setValue={setTitle}
          />
          <ReactQuill
            className="bg-white"
            theme="snow"
            value={dec}
            onChange={setDec}
          />
          <select
            name=""
            className="w-[100%] text-[18px] my-2 shadow-md mb-4 font-semibold py-3 px-3 outline-none border-none rounded-md text-gray-500"
            id=""
          >
            <option value="">Select Category</option>
          </select>

          <select
            name=""
            className="w-[100%] text-[18px] my-2 shadow-md mb-4 font-semibold py-3 px-3 outline-none border-none rounded-md text-gray-500"
            id=""
          >
            <option value="">Select Brand</option>
          </select>
          <select
            name=""
            className="w-[100%] text-[18px] my-2 shadow-md mb-4 font-semibold py-3 px-3 outline-none border-none rounded-md text-gray-500"
            id=""
          >
            <option value="">Select Color</option>
          </select>
          <CoustomInput
            type={"text"}
            ple={"Enter Price..."}
            value={title}
            setValue={setTitle}
          />

          <CoustomInput
            type={"text"}
            ple={"Enter Price..."}
            value={title}
            setValue={setTitle}
          />

          <div className="my-5 bg-white">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </Dragger>
          </div>
          <div className="mt-5">
            <button
              className="py-2 px-4 text-[18px] font-bold bg-yellow-500 rounded-md hover:bg-yellow-600 duration-300 transition-all  text-white"
              type="submit"
            >
              Add blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
