export async function loadMockProduct(id) {
  const res = await fetch(`/mocks/product_base_${id}.json`)
  if (!res.ok) {
    throw new Error(`Could not load mock product for id ${id}`)
  }
  return await res.json()
}
