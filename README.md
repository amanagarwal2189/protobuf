# protobuf
nodejs with protobuf

# Protoc compilation

OS- Windows-10 64-bit

1) Install Protoc
2) Download ProtoBuf Compiler (protoc) **protoc-3.8.0-win64.zip** . - currently 3.8.0 
3) Unzip protoc to a location. Say C:/protobuf/protocWin
4) Append Environment Variable PATH with C:/protobuf/protocWin/bin
5) Get a .proto file (say, abc.proto). Place it in a directory. (E.g. C:/workingDir/)
6) Compile the .proto file and generate import files (Closure Imports)
    1) Open command prompt/ powershell.
    2) Go to C:/workingDir/
    3) Type the following for creating separate import files for each message in the Proto file
       1) `protoc --js_out=,binary:./output abc.proto`
    4) Or, for a single .js file
        1) `protoc --js_out=library=combined/lib,binary:./output abc.proto`
    5) This will create lib.js in C:/workingDir/output/combined/
    6) Or, for Common Imports, 
        1) `protoc --proto_path=src --js_out=import_style=commonjs,binary:combined/lib src/abc.proto`
7) Use these generated files as required. See the project structure. 

# Sources

- Overview:
    - https://github.com/protocolbuffers/protobuf

- Javascript compilation:
    - https://developers.google.com/protocol-buffers/docs/reference/javascript-generated
    - https://github.com/protocolbuffers/protobuf/tree/master/js
    - https://github.com/protocolbuffers/protobuf/releases

- NPM
    - https://www.npmjs.com/package/google-protobu
    
- Download
    - https://github.com/protocolbuffers/protobuf/releases
