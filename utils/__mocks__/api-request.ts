const apiRequest = jest.fn(() => {
    Promise.resolve({
        status: ``,
        data: []
      })
})

export default apiRequest