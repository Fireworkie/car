import json
import socket

# 定义小车运动的函数
def move_forward():
    print("小车前进")

def move_backward():
    print("小车后退")

def turn_left():
    print("小车左转")

def turn_right():
    print("小车右转")

# 监听客户端连接并处理数据
def handle_client(client_socket):
    try:
        # 接收JSON数据
        json_data = client_socket.recv(1024).decode()
        # print("接收到的JSON数据:", json_data)

        # 解析JSON数据
        parsed_data = json.loads(json_data)

        # 获取command字段的值
        command = parsed_data.get('command')

        # 根据command值执行相应的函数
        if command == 'forward':
            move_forward()
        elif command == 'backward':
            move_backward()
        elif command == 'left':
            turn_left()
        elif command == 'right':
            turn_right()
        else:
            print("未知的命令")
        # response = command+"命令执行完成"
        # client_socket.send(response.encode())
    except Exception as e:
        print("处理客户端数据时出现错误:", e)
    finally:
        # 关闭客户端连接
        client_socket.close()

# 启动服务器
def start_server():
    # 创建Socket对象
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    try:
        # 绑定IP地址和端口号
        server_address = ('localhost', 8001)
        server_socket.bind(server_address)

        # 监听连接
        server_socket.listen(1)
        # print("服务器已启动，等待客户端连接...")

        while True:
            # 接受连接
            client_socket, client_address = server_socket.accept()
            print("客户端已连接:", client_address)

            # 处理客户端数据
            handle_client(client_socket)

    except Exception as e:
        print("服务器运行时出现错误:", e)
    finally:
        # 关闭服务器
        server_socket.close()

# 启动服务器
while True:
    start_server()