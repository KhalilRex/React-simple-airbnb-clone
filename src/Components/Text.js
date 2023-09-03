import React from 'react'

export default function Text() {
    return (
        <div className="container ny-3 my-4">
            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                <button type="button" class="btn btn-secondary ny-3 my-3">Secondary</button>
                <label for="floatingTextarea2">Comments</label>
            </div>
        </div>
    )
}
