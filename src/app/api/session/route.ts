export async function GET() {
    const session = {
        id: '1255448',
        name: 'Tester'
    }

    return Response.json({ session })
}