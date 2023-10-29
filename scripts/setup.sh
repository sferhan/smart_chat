
if pip3 --version &> /dev/null; then
    echo "Pip3 is installed"
else:
    echo "Installing Python"
    sudo yum install -y python3 python3-pip

if git --version &> /dev/null; then
    echo "Git is installed"
else:
    echo "Installing Git"
    sudo yum install git --assumeyes

if pipenv --version &> /dev/null; then
    echo "Pipenv is installed"
else
    echo "Installing Pipenv"
    pip3 install pipenv
fi