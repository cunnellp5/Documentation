# Deployment experiences (Cloud Providers only)

> personal thoughts on deployments

## 1. AWS (RDS)

#### Use

- Deployed a psql db to 'free tier'
- Used default values

#### Thoughts

- Set up is straight forward

- Need to configure 'Security groups' to allow access from specific IP addresses

- Despite selecting 'free tier', I found that I was charged $15 at the end of a pay cycle. Without fully understanding why, it seems like I should've 'stopped' the DB when not in use, or maybe uncheck the 'backups' checkbox.

---

List of potentials:

2. Google Cloud Platform
3. Microsoft Azure
4. Oracle Cloud
5. IBM Cloud
6. Cloudflare
