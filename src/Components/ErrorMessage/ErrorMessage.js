const ErrorMessage = ({ props }) => {
    return (
        <div
            style={{
                width: "100%",
                padding: 10,
                marginBottom: 10,
                borderRadius: 4,
                backgroundColor: "red",
                textAlign: 'center',
                color: 'white',
                textTransform: "capitalize",
                fontSize: 10,
            }}

        >
            {props}
        </div>
    );


};
export default ErrorMessage;