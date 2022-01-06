const { getAll, search } = require("../../db/home")

async function home(req, res) {

    try {
        const travels = await getAll()
        if (!travels) {
            return res.status(400).json({ success: true, result: "travel not found !" })
        }
        res.status(400).json({ success: true, travels })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error })
    }

}

async function searchCtl(req, res) {
    try {
        const { source, destination } = req.body

        const travels = await search(source, destination)
        if (!travels) {
            return res.status(400).json({ success: true, found: false, result: "travel not found !" })
        }
        res.status(400).json({ success: true, travels })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error })
    }

}




module.exports = {
    home,
    searchCtl
}