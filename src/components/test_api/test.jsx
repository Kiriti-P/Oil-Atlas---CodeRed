import {getUser} from './test_api'

describe("Axios requests suite", () => {
    test("should get json", async () => {
      const response = await getUser();
      expect(response).not.toBeNull();
      expect(response.status).toBe(200);
    });
  })