import {Response} from 'express';

const errorHandleHttp = (res:Response, errorMessage: string, errorRaw?:any, status?: number) => {
    res.status(status || 500)
    res.send({
        "error": errorMessage,
        "body": `${errorRaw??``}`,
      })
}

export { errorHandleHttp };