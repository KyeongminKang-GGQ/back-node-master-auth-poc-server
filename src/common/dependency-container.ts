import { container, Lifecycle } from "tsyringe";
import { UidGenerator } from "../workers/UidGenerator";
import { UserRepositoryImp } from "../storage/UserRepositoryImp";
import { SignUpManager } from "../workers/SignUpManager";

const injectDependency = () => {
    container.register("UidGenerator", {
        useClass: UidGenerator
    });

    container.register("UserRepository",
        { useClass: UserRepositoryImp },
        { lifecycle: Lifecycle.Singleton }
    );

    container.register("SignUpManager", {
        useClass: SignUpManager
    });
}

export default injectDependency;