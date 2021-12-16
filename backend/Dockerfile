FROM golang:1.17-alpine

WORKDIR /api
COPY go.mod /api/go.mod
COPY go.sum /api/go.sum
RUN go mod download
COPY . /api
RUN go build -o /api/main main.go
CMD ["/api/main"]