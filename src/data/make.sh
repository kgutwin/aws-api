#!/bin/sh

for source_dir in source/*/*; do
    service=$(basename `dirname $source_dir`)
    mkdir -p $service
    cp $source_dir/service-2.json $service/service.json
done
