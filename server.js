const app = express();
var arg = minimist(process.argv.slice(2));
const PORT = arg.port || 5000;
