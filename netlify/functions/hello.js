exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: "안녕하세요! 운세의 숲에 오신 것을 환영합니다." })
    };
};
