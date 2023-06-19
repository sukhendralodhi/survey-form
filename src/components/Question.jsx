/* eslint-disable react/prop-types */

const Question = (props) => {
    return (
        <>
            <div className="container-fluid">
                <div className="col-md-5 m-auto">
                    <div className="mt-3">
                        <div className="card text-left">
                            <div className="card-body">
                                <form onSubmit={props.submitQuestions}>
                                    <div className="form-group">
                                        <label className="my-2" htmlFor="">
                                            <b>.3</b> What are you currently doing ?
                                        </label>
                                        <br />
                                        <input
                                            type="radio"
                                            id="teacher"
                                            name="q1"
                                            autoComplete="off"
                                            value="Teaching"
                                        />
                                        <label htmlFor="teacher" >
                                            Teaching
                                        </label>

                                        <input
                                            type="radio"
                                            id="student"
                                            name="q1"
                                            autoComplete="off"
                                            value="Student"
                                        />
                                        <label htmlFor="student">Student</label>

                                        <input
                                            type="radio"
                                            id="programmer"
                                            name="q1"
                                            autoComplete="off"
                                            value="Programmer"
                                        />

                                        <label htmlFor="programmer">Programmer</label>
                                        <input
                                            type="radio"

                                            name="q1"
                                            autoComplete="off"
                                            value="Other"
                                        />
                                        <label htmlFor="other">Other</label>
                                        <br />
                                        <input
                                            type="text"
                                            className="form-control my-2"
                                            name="other"
                                            autoComplete="off"
                                            placeholder="Type here if not listed."
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="my-2" htmlFor="rating">
                                            <b>4.</b> Please rate our course.
                                        </label>
                                        <br />
                                        <input type="radio" name="q2" id="poor" value="Poor" autoComplete="off" />
                                        <label htmlFor="poor">Poor</label>
                                        <input type="radio" name="q2" id="good" value="Good" autoComplete="off" />
                                        <label htmlFor="good">Good</label>
                                        <input type="radio" name="q2" id="excellent" value="Excellent" autoComplete="off" />
                                        <label htmlFor="excellent">Excellent</label>
                                    </div>
                                    <div className="form-group">
                                        <label className="my-2" htmlFor="review">
                                            <b>5.</b> Write your review here.
                                        </label>
                                        <textarea name="q3" className="form-control"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary my-2">Save</button>
                                </form>
                                <center>
                                    <span style={{ color: 'black' }} className="badge badge-pill disabled">1</span>
                                    <span className="badge badge-pill bg-primary">2</span>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Question;