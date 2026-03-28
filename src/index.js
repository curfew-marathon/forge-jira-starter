import Resolver from '@forge/resolver';
import api, { route } from '@forge/api';

const resolver = new Resolver();

resolver.define('getContext', async (req) => {
    const projectKey = req.context.extension.project.key;

    const [userRes, projectRes] = await Promise.all([
        api.asUser().requestJira(route`/rest/api/3/myself`),
        api.asUser().requestJira(route`/rest/api/3/project/${projectKey}`),
    ]);

    const [user, project] = await Promise.all([userRes.json(), projectRes.json()]);

    return {
        user: { displayName: user.displayName, email: user.emailAddress },
        project: { key: project.key, name: project.name, type: project.projectTypeKey },
    };
});

export const handler = resolver.getDefinitions();

