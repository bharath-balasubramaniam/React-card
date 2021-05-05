function Card(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {props.place.plan}
            </h5>
            <h6 className="card-price text-center">
              {props.place.currency}
              {props.place.value}
              <span className="period">{props.place.period}</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              {props.place.offer.map((obj) => {
                return (
                  <li className={obj.isAccess ? "" : "text-muted"}>
                    <span className="fa-li">
                      <i
                        className={
                          obj.isAccess ? "fas fa-check" : "fas fa-times"
                        }
                      ></i>
                    </span>
                    {obj.name}
                  </li>
                );
              })}
            </ul>
            <button className="btn btn-block btn-primary text-uppercase">
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
