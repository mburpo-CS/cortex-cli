#!/usr/bin/env node

/*
 * Copyright 2018 Cognitive Scale, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { version } = require('../package.json');
const program = require('commander');

program
    .version(version, '-v, --version')
    .description('Cortex CLI')
    .command('configure', 'Configure the Cortex CLI')
    .command('project [cmd]', 'Work with a related collection of Cortex contributions')
    .command('agents [cmd]', 'Work with Cortex Agents')
    .command('skills [cmd]', 'Work with Cortex Skills')
    .command('types [cmd]', 'Work with Cortex Types')
    .command('processors [cmd]', 'Work with the Cortex Processor Runtime')
    .command('functions [cmd]', 'Work with Cortex Functions');

program.parse(process.argv);
