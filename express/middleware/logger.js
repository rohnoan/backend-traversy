import 'colors';

const logger = (req, res, next) => {
    const methodColors = {
        GET: 'green',
        POST: 'blue',
        PUT: 'yellow',
        DELETE: 'red'
    };

    const color = methodColors[req.method] || 'white';
    const coloredMethod = req.method[color];
    const coloredLink = `${req.protocol}://${req.get('host')}${req.originalUrl}`.gray;

    console.log(`${coloredMethod} ${coloredLink}`);
    next();
};

export default logger;
