export const hashAddress = async (address: string | undefined) => {

  const encodedText = new TextEncoder().encode(address)

  const digest = await crypto.subtle.digest(
    {
      name: 'SHA-256',
    },
    encodedText
  );

  return [...new Uint8Array(digest)]
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}