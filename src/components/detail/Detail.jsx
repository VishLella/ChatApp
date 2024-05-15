import "./detail.css"

const Detail = () => {
    return (
        <div className="detail">
            <div className="detail_user">
                <img src="./avatar.png" alt="" />
                <h2>John Smith</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="detail_info">
                <div className="detail_option">
                    <div className="detail_title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" className="" />
                    </div>
                </div>
                <div className="detail_option">
                    <div className="detail_title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" className="" />
                    </div>
                </div>
                <div className="detail_option">
                    <div className="detail_title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" className="" />
                    </div>
                </div>
                <div className="photos">
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA" alt="" />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="downloadIcon" />
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA" alt="" />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="downloadIcon" />
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA" alt="" />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="downloadIcon" />
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA" alt="" />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="downloadIcon" />
                    </div>
                </div>
                <div className="detail_option">
                    <div className="detail_title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" className="" />
                    </div>
                </div>
                <button>Block User</button>
            </div>
        </div>
    )
}

export default Detail