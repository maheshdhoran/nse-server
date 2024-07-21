module.exports.status = async(req, res) => {
    try {
        return res.status(200).json({
            status: 200,
            message: 'System is working'
        })
    } catch (error) {
        console.error(`Error Message- ${error.message}`)
        console.error(`Error Stack- ${error.stack}`)
        return res.status(500).json({
            status: 500,
            message: 'Oops something went wrong!'
        })
    }
};

