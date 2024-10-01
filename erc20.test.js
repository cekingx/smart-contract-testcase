
/**
 * ERC20 main functions
 * - balanceOf
 * - totalSupply
 * - transfer
 * - transferFrom
 * - approve
 */
describe("ERC20", function () {
  it("balanceOf")
  it("totalSupply")

  describe("Approve", function () {
    it("revert spender zero address")

    describe("Spender not zero address", function () {
      describe("Has enough balance", function () {
        it("emit approval event")
        it("approve value when no value before")
        it("approve value and replace previous value")
      })

      describe("Has not enough balance", function () {
        it("emit approval event")
        it("approve value when no value before")
        it("approve value and replace previous value")
      })
    })
  })

  describe("Transfer", function () {
    it("revernt recipient zero address")

    describe("Recipient not zero address", function () {
      it("revert when insufficient balance")

      describe("Transfer all balance", function () {
        it("transfer the value")
        it("emit transfer event")
      })

      describe("Transfer zero value", function () {
        it("transfer the value")
        it("emit transfer event")
      })
    })
  })

  describe("TransferFrom", function () {
    it("revert zero address owner")

    describe("Non zero address owner", function () {
      it("revert zero address recipient")

      describe("Non zero address recipient", function () {
        describe("Spender has enough allowance", function () {
          it("revert not enough balance")

          describe("Enough balance", function () {
            it("transfer the value")
            it("decrease allowance")
            it("emit transfer event")
          })
        })

        describe("Spender has not enough allowance", function () {
          it("revert enough balance")
          it("revert not enough allowance")
        })
      })
    })
  })
})