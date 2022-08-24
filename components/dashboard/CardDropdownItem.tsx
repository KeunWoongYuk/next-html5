export default function CardDropdownItem(props: any) {
  return (
    <a className="dropdown-item d-flex align-items-center" href="#">
      <div className="mr-3">
        <div className={props.classStyle}>
          <i className="fas fa-donate text-white"></i>
        </div>
      </div>
      <div>
        <div className="small text-gray-500">{props.title}</div>
        {props.description}
      </div>
    </a>
  );
}
