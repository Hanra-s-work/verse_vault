all:
run:
test:
debug:
install:
	curl -L https://get.k3s.io/ -o install_k3s.sh
	chmod +x install_k3s.sh
	./install_k3s.sh -q
