import React from 'react'

const NewComment = () => {
  return (
    <div className="mb-2 card">
      <div className="card-body dark:bg-gray-700 dark:text-white">
        <div>
          <h2>New comment</h2>
          <div className="mb-4">
            <select className="form-select" name="userId" value="">
              <option disabled value="" selected>
                Выберите пользователя
              </option>

              <option>Доктор</option>
              <option>Тусер</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label dark:text-white"
            >
              Сообщение
            </label>
            <textarea
              className="border rounded form-control dark:border-green-400 dark:bg-gray-600 dark:text-white"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="mt-2 col-md-3">
          <button
            className="w-full mt-2 btn btn-primary "
            onClick={() => null}
            title="add comment"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewComment
