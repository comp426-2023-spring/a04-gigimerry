const app = express();
var arg = minimist(process.argv.slice(2));
const PORT = arg.port || 5000;

app.post('/app/rpsls/play', (req, res) => {
	res.status(200).send(rpsls(req.body.shot));
});

app.get('/app/rps/play/:shot', (req, res) => {
	res.status(200).send(rps(req.params.shot));
});

app.get('/app/rpsls/play/:shot', (req, res) => {
	res.status(200).send(rpsls(req.params.shot));
});

app.get('*', (req, res) => {
	res.status(400).send("404 NOT FOUND");
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
