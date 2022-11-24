import Avalanche from "avalanche"
import { HealthAPI } from "avalanche/dist/apis/health"
import { HealthResponse } from "avalanche/dist/apis/health/interfaces"

const ip: string = "4th.vps.deroris.net"
const port: number = 9650
const protocol: string = "http"
// const networkID: number = 43113
const networkID: number = 1
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID)
const health: HealthAPI = avalanche.Health()

const main = async (): Promise<any> => {
    const healthResponse: HealthResponse = await health.health()
    console.dir(healthResponse, { depth: null })
}

main()
