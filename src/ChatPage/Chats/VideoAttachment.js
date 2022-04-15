import { useRef, useState } from "react";

function AttachVideo(messageGetter, setReRender, loadMessages, setMessage, getMessage) {
    const newVideo = useRef();
    const [vid, setVid] = useState();
    const onVidChange = () => {
        const [file] = newVideo.current.files;
        if (file) {
            console.log(file.name);
            messageGetter.messageGetter.push([1, file.name, new Date(), 'vid']);
            setVid(URL.createObjectURL(file));
            messageGetter.setReRender(messageGetter.messageGetter[messageGetter.messageGetter.length - 1][2]);
            newVideo.current.value = null;
            // in order to rerender the chat page and show duplicate messeges
            messageGetter.setMessage(messageGetter.getMessage+1);
        }
    };
    return (
        <div class="modal fade" id="vidModal" tabindex="-1" aria-labelledby="vidModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Video:</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <input type="file" ref={newVideo} />
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={onVidChange}>Send Video</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AttachVideo;