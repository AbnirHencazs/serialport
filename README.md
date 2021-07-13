# Serial port
Basic listener serial port, catches an UART buffer and prints it out in both string and buffer types. 

## Install npm dependencies
```sh
$ npm install
```

## Running the script
Since the name of the port changes dependant on SO and the baud rate does not have a default, these two parameters are to be passed on in the following manner __node index.js PORT BAUDRATE__ order for the main process to be able to run.

### Windows example
Here's an example on how to run the project on Windows 10

```sh
$ node index.js COM2 9600
```