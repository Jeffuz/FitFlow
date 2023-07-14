# FitFlow
Achieve your fitness goals with personalized guidance. Answer a few questions, and our AI-powered platform generates a tailored fitness plan just for you. Enjoy customized workouts, nutrition tips, and exercise recommendations. FitFlow makes fitness accessible and enjoyable, empowering you on your journey to a healthier lifestyle.

## Getting Started
### Prerequisites
- [Node.js](https://nodejs.org/en) v14 or higher installed on your machine
- [MongoDB](https://www.mongodb.com/) set up and running

- ### Installation (Unix/macOS)
1. Clone the repository
```bash
git@github.com:Jeffuz/FitFlow.git
```
2. Install frontend dependencies
```bash
cd fitflow
npm install
npm install react-router-dom
```
3. Set up [environment](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/) variables
```bash
python3 -m pip install --user virtualenv
python3 -m venv env
```
4. Enable Virtual Environment 
```bash
source env/bin/activate
```
5. Start the backend server
```bash
python3 server.py
```
6. Start the frontend server
```bash
npm start
```

### Installation (Windows)
1. Clone the repository
```bash
git@github.com:Jeffuz/FitFlow.git
```
2. Enable Scripts on Powershell (admin)
```bash
Set-ExecutionPolicy RemoteSigned
```
3. Install frontend dependencies
```bash
cd fitflow
npm install
npm install react-router-dom
```
4. Set up [environment](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/) variables
```bash
python -m pip install --user virtualenv
python -m venv env
```
5. Enable Virtual Environment 
```bash
.\env\Scripts\activate
```
6. Start the backend server
```bash
python server.py
```
7. Start the frontend server
```bash
npm start
```
