import React from "react";
import { closeModal } from "../../features/netflixSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import "./MovieDetail.css";

function MovieDetail({ modalData }) {
  const dispatch = useDispatch();
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        dispatch(closeModal());
      }}
    >
      <div className="modal-box-cover" onClick={(e) => e.stopPropagation()}>
        <div className="modal-box-data">
          <div className="modal-image-data">
            {/* <img className="modal-poster" src={modalData.poster} alt="" /> */}
            <div
              className="modal-poster"
              style={{
                backgroundImage: `linear-gradient(to bottom, transparent, #181818), 
            url(${modalData.poster})`,
              }}
            ></div>
          </div>
          <div className="modal-text-data">
            <p className="modal-title">{modalData.title}</p>
            <div className="modal-row">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={`https://www.imdb.com/title/${modalData.id}/`}
                className="modal-more-btn"
              >
                <FontAwesomeIcon icon={faPlay} />
                <p>More</p>
              </a>
              <div className="modal-type" style={{ color: "white" }}>
                <p className="modal-type-text">
                  {modalData.type.toUpperCase()}
                </p>
              </div>
            </div>
            <p className="modal-description">
              Lorem ipsum dolor sit amet. Quo nisi omnis qui nobis deserunt non
              ullam quae est voluptatem autem aut omnis voluptas ut dolores
              dolores ab debitis quas. Non odit fuga ut corrupti dolorem et
              soluta laborum ut deleniti necessitatibus ad consequuntur iure!
              Rem exercitationem molestias qui asperiores quaerat vel doloremque
              dolor ad omnis nobis aut molestiae internos nam omnis temporibus.
              Ea unde amet aut amet rerum qui vero explicabo sed dolores vitae.
              Qui libero omnis et iusto omnis et galisum voluptates id corporis
              ipsum ab harum voluptas sed officiis itaque. Aut consequatur
              perspiciatis aut fugiat quia in optio placeat distinctio.
              <br></br>
              Lorem ipsum dolor sit amet. Quo nisi omnis qui nobis deserunt non
              ullam quae est voluptatem autem aut omnis voluptas ut dolores
              dolores ab debitis quas. Non odit fuga ut corrupti dolorem et
              soluta laborum ut deleniti necessitatibus ad consequuntur iure!
              Rem exercitationem molestias qui asperiores quaerat vel doloremque
              dolor ad omnis nobis aut molestiae internos nam omnis temporibus.
              Ea unde amet aut amet rerum qui vero explicabo sed dolores vitae.
              Qui libero omnis et iusto omnis et galisum voluptates id corporis
              ipsum ab harum voluptas sed officiis itaque. Aut consequatur
              perspiciatis aut fugiat quia in optio placeat distinctio.
            </p>
          </div>
        </div>
        <div className="modal-close-btn" onClick={() => dispatch(closeModal())}>
          <FontAwesomeIcon className="modal-close-icon" icon={faXmark} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
