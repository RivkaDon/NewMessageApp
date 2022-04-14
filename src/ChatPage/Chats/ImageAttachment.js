import { useRef, useState } from "react";

function AttachImage(messageGetter, setReRender, loadMessages) {
    const newImage = useRef();
    const [img, setImg] = useState();
    const onImageChange = () => {
        const [file] = newImage.current.files;
        if (file) {
            messageGetter.messageGetter.push([1, file.name, 'now', 'pic']);
            setImg(URL.createObjectURL(file));
            messageGetter.setReRender(messageGetter.messageGetter[messageGetter.messageGetter.length - 1][1]);
            newImage.current.value = null;
        }
    };
    return (
        <div class="modal fade" id="picModal" tabindex="-1" aria-labelledby="picModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Image:</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <input type="file" ref={newImage} />
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={onImageChange}>Send Image</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AttachImage;