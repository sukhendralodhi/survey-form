/* eslint-disable react/prop-types */

function Details(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="col-md-5 m-auto">
                    <div className="mt-3">
                        <div className="card text-left">
                            <div className="card-body">
                                <form onSubmit={props.submit}>
                                    <div className="form-group">
                                        <label className="m-2" htmlFor="name">
                                            {""}
                                            <b>1.</b>Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Please enter your name"
                                            required
                                            autoComplete="off" />
                                    </div>
                                    <div className="form-group">
                                        <label className="m-2" htmlFor="email">
                                            {""}
                                            <b>2.</b>Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Please enter your email"
                                            required
                                            autoComplete="off" />
                                    </div>
                                    <button type="submit" className="mt-4 btn btn-primary">Next</button>
                                </form>
                                <center>
                                    <span className="badge badge-pill bg-primary">1</span>
                                    <span style={{ color: 'black' }} className="badge badge-pill disabled">2</span>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details;