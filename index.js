import express from 'express';

const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
	console.log('Server listening on port 3000 http://localhost:3000');
});