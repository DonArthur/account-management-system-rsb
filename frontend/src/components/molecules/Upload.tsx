import { useRef, useState } from "react"

type Props = {
    onUpload: (file: File) => void
    existingImg?: string
}

const Upload = (props: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const [dragging, setDragging] = useState(false)

    const handleFileChange = (file: File | null = null) => {
        if (!file || !file.type.startsWith('image/')) return

        setPreview(URL.createObjectURL(file))
        console.log('File to upload:', file)
        props.onUpload(file)
    }

    return (
        <div className={`relative flex items-center justify-center
        w-40 h-40 my-3 text-center rounded-full border-2 border-dashed cursor-pointer
        transition ${dragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
            onClick={() => inputRef?.current?.click()}
            onDragOver={(e) => {
                e.preventDefault()
                setDragging(true)
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
                e.preventDefault()
                setDragging(false)
                handleFileChange(e.dataTransfer.files[0])
            }}
        >
            {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-full" />
            ) : (
                <span className="text-gray-400 text-sm p-3">Drag & Drop or Click to Upload</span>
            )}
            <input type="file" ref={inputRef} className="hidden" onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)} />
        </div>
    )
}

export default Upload