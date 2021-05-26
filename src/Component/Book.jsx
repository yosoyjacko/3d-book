import '../Style/BookStyle.scss'
import IMG1 from '../Assets/img/portada.jpg'

function Book () {
    return (
        <div className="container">
            <div className="container-book">
                <div className="book">
                    <div className="img">
                        <img src={IMG1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book