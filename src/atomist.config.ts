/*
 * Copyright © 2018 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Configuration } from "@atomist/automation-client";
import {
    ConfigureOptions,
    configureSdm,
} from "@atomist/sdm-core";
import { machine } from "./machine/machine";

const machineOptions: ConfigureOptions = {
    requiredConfigurationValues: [
        "sdm",
        "sdm.docker",
        "sdm.docker.hub",
        "sdm.docker.hub.registry",
        "sdm.docker.hub.user",
        "sdm.docker.hub.password",
        "sdm.generator.spring.project.owner",
        "sdm.generator.spring.project.repo",
    ],
};

export const configuration: Configuration = {
    postProcessors: [
        configureSdm(machine, machineOptions),
    ],
};
