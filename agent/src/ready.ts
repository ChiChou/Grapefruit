function requireMinimalVersion(requirement: string) {
  const parse = (ver: string) => ver.split('.').map(s => parseInt(s, 10))
  const a = parse(Frida.version), b = parse(requirement)
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i] < b[i]) {
      throw new Error(`Fatal error: requiring mininal frida version ${requirement}, found ${Frida.version}`)
    }
  }
}

requireMinimalVersion('12.5')

Module.ensureInitialized('Foundation')
Module.ensureInitialized('UIKit')
