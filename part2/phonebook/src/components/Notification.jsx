const ErrorNotification = ({ message }) => message === null ? null : <div className="error">{message}</div>

const SuccessNotification = ({ message }) => message === null ? null : <div className="success">{message}</div>

export default { SuccessNotification, ErrorNotification }