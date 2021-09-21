function Error({ statusCode }) {
    return (
        <p>
            {statusCode
                ? `O erro ${statusCode} aconteceu no servidor`
                : 'Aconteceu um erro no servidor'}
        </p>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error