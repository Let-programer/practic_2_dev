# ---------- Этап 1: сборка ----------
FROM golang:1.22-alpine AS builder
WORKDIR /build

# Сначала только зависимости: слой кэшируется, пока go.mod/go.sum не менялись
COPY go.mod go.sum ./
RUN go mod download

# Потом исходники
COPY . .
# CGO_ENABLED=0 -> статический бинарник, запустится в distroless/static без glibc
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /out/app ./main.go

# ---------- Этап 2: исполнение ----------
FROM gcr.io/distroless/static-debian12:nonroot
WORKDIR /app
COPY --from=builder /out/app /app/app

EXPOSE 8080
ENTRYPOINT ["/app/app"]