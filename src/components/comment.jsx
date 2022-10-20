import { useState } from "react";
import { useDispatch } from "react-redux";
import { __deleteDadat, __updateDadat } from "../redux/modules/dadatSlice";

function Comment({ mydadats }) {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [newDadat, setNewDadat] = useState("");

  const onClickUpdateHandler = (newDadatId) => {
    dispatch(__updateDadat({ newDadatId, newDadat }));
    setNewDadat("");
    setIsEditMode(false);
  };

  const dadatDeleteHandler = (id) => {
    dispatch(__deleteDadat(id));
  };
  return (
    <div key={mydadats.id}>
      {/* 대댓 입력상태__ */}
      <div>
        <span>{mydadats.nickname}</span>
        <div>
          {isEditMode ? (
            <input
              type="text"
              placeholder={mydadats.memo}
              name="memo"
              value={newDadat.memo}
              onChange={(ev) => {
                setNewDadat(ev.target.value);
              }}
            />
          ) : (
            <span>{mydadats.memo}</span>
          )}
        </div>
      </div>

      <div>
        {isEditMode && (
          <>
            <button onClick={() => onClickUpdateHandler(mydadats.id)}>
              수정저장
            </button>
            <button
              onClick={() => {
                setIsEditMode(false);
              }}
            >
              취소
            </button>
          </>
        )}

        {!isEditMode && (
          <>
            <button onClick={() => setIsEditMode(true)}>수정</button>
            <button onClick={() => dadatDeleteHandler(mydadats.id)}>
              삭제
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Comment;
