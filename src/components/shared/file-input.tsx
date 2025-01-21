"use client";

import { forwardRef, useRef, useState } from "react";
import { Input } from "@/components/shared/input";
import { FileIcon } from "lucide-react";
import { Separator } from "@/components/shared/separator";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useMergeRefs } from "@/hooks/useMergeRefs";
import { uploadFile } from "@/repository/actions/upload-service";

interface FileInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
  > {
  onChange?: (url: string | undefined) => void;
  value?: string;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, onChange, disabled, value, ...props }, ref) => {
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { toast } = useToast();
    const mergedRef = useMergeRefs(fileInputRef, ref);

    const resetFileInput = () => {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setIsUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await uploadFile(formData);
        onChange?.(response.url);
        toast({
          title: "Success",
          description: response.message,
        });
      } catch (error) {
        console.error("Upload failed:", error);
        resetFileInput();
        toast({
          variant: "destructive",
          title: "Gagal upload file",
          description: "Silahkan coba upload file kembali",
        });
      } finally {
        setIsUploading(false);
      }
    };

    return (
      <div className="relative">
        <Input
          type="file"
          onChange={handleFileChange}
          disabled={disabled || isUploading}
          className={cn("cursor-pointer pl-[100px] file:hidden", className)}
          value={value}
          ref={mergedRef}
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pb-0 pl-2 pt-[0.1rem] text-[#7E7E7E] md:pb-[0.1rem] md:pt-0">
          <FileIcon className="mr-2 h-4 w-4" />
          <p className="text-base leading-[1rem] md:text-sm">Upload</p>
          <Separator
            orientation="vertical"
            className={`${isUploading ? "bg-gray-400 opacity-50" : "bg-gray-300 opacity-100"} ml-2 transition-colors`}
          />
        </div>
      </div>
    );
  },
);

FileInput.displayName = "FileInput";

export { FileInput };
