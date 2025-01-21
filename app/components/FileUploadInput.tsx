"use client";
import { Input, Button } from "@nextui-org/react";
import React, { useState } from "react";

interface FileUploadInputProps {
  id: "studentPhoto" | "marklist10th" | "marklist12th" | "marklistKeam" | "studentSignature" | "parentSignature" | "transactionSlip";
  required?: boolean;
  label: string;
  value?: string;
  labelPlacement?:"inside" | "outside" | "outside-left";
  uploadedFile?: File | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const FileUploadInput: React.FC<FileUploadInputProps> = ({ id, label, required = false ,uploadedFile}) => {
  const [error, setError] = useState<string>("");
  const [isInvalid, setInvalid] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (file) {
      console.log(id);
      console.log(file);
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      const validTypes = ["image/jpeg", "image/png"];
      const maxSize = 2 * 1024 * 1024;

      if (!validTypes.includes(file.type)) {
        setError("Only JPEG and PNG files are allowed.");
        setInvalid(true);
        return;
      }

      if (file.size > maxSize) {
        setError("File size must be less than 2MB.");
        setInvalid(true);
        return;
      }

      setError("");
      setInvalid(false);
      setFile(file);
    } else {
      setError("");
      setInvalid(true);
    }
  };
  return (
    
    <div id={id} className="flex flex-col gap-4 md:flex-row ">
      <Input
        type="file"
        accept=".jpeg,.jpg,.png"
        isInvalid={isInvalid}
        errorMessage={error}
        variant="bordered"
        isRequired={required}
        onChange={handleFileChange}
        label={label}
        value={uploadedFile?.name}
      />
      <Button type="button" color="warning" className="mt-6" variant="ghost" onPress={handleUpload}>
        UPLOAD
      </Button>
    </div>
  );
};

export default FileUploadInput;
