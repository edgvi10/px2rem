import { calculator } from "../../res/calculator";

export default function handler(req, res) {
    const query = req.query;
    const body = req.body;

    const data = {};
    data.multiplicator = query.multiplicator ?? body.multiplicator
    data.factor = query.factor ?? body.factor

    const product = calculator(data.multiplicator, data.factor);

    return res.status(200).json(product);
}